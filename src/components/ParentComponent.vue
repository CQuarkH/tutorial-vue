<script setup>
import { ref } from 'vue';

import ChildComponent from './ChildComponent.vue';

const mensajePadre = ref('Hola desde el padre');

const resetearMensaje = () => {
    mensajePadre.value = 'Hola desde el padre';
}

const tareas = ref([
    { nombre: 'Hacer la cama', completada: false },
    { nombre: 'Lavar los platos', completada: false },
    { nombre: 'Hacer la compra', completada: false },
    { nombre: 'Estudiar Vue 3', completada: false }
]);

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
                <input type="checkbox" v-model="tarea.completada" :id="'tarea' +
                    index" class="form-check-input">
                <label :for="'tarea' + index" class="form-check-label">{{
                    tarea.nombre }}</label>
                <!-- Mensaje condicional que se muestra cuando la tarea está
    completada -->
                <p v-if="tarea.completada" class="text-success">¡Tarea
                    completada!</p>
            </div>
        </div>
    </div>
</template>