<script setup>
import { ref, onMounted } from 'vue';

import ChildComponent from './ChildComponent.vue';

const mensajePadre = ref('Hola desde el padre');

const resetearMensaje = async () => {
    await fetchHelloMessage();
}

const tareas = ref([]);

const fetchHelloMessage = async () => {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    mensajePadre.value = data.message;
}

const fetchTareas = async () => {
    const response = await fetch('http://localhost:3000/api/tareas');
    const data = await response.json();
    tareas.value = data;
}

const updateTask = async (id) => {
    const task = tareas.value.find(task => task.id === id);
    const response = await fetch('http://localhost:3000/api/tareas', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const updatedTask = await response.json();
    const index = tareas.value.findIndex(t => t.id === id);

    if (index !== -1) {
        tareas.value.splice(index, 1, updatedTask);
    } else {
        console.error("No se encontró la tarea a actualizar en el array.");
    }
}

onMounted(() => {
    fetchHelloMessage();
    fetchTareas();
});

</script>

<template>
    <div class="container">
        <!-- Título del componente padre -->
        <h1 class="text-center my-4">Componente Padre</h1>
        <!-- Componente hijo con un prop y un evento personalizado -->
        <ChildComponent :mensaje="mensajePadre" @actualizarMensaje="mensajePadre =
            $event" />
        <!-- Botón para resetear el mensaje del padre -->
        <button class="btn btn-primary mt-3" v-on:click="resetearMensaje">Resetear Mensaje</button>
        <!-- Mensajes condicionales basados en el valor de mensajePadre -->
        <p v-if="mensajePadre === 'Hola desde el padre'" class="mt-3">El
            mensaje está en su estado original</p>
        <p v-else class="mt-3 text-warning">El mensaje ha sido cambiado por
            el hijo</p>
        <!-- Lista de tareas con checkboxes -->
        <div class="mt-5">
            <h2>Lista de tareas</h2>
            <div v-for="(tarea, index) in tareas" :key="index" class="form-check">
                <!-- Checkbox vinculado a la propiedad completada de cada tarea
    -->
                <input type="checkbox" @input="updateTask(tarea.id)" :id="'tarea' +
                    index" class="form-check-input">
                <label :for="'tarea' + index" class="form-check-label">{{
                    tarea.name }}</label>
                <!-- Mensaje condicional que se muestra cuando la tarea está
    completada -->
                <p v-if="tarea.done" class="text-success">¡Tarea
                    completada!</p>
            </div>
        </div>
    </div>
</template>