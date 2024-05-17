<script setup>
import { defineProps, ref } from 'vue'

defineProps({
    mensaje: String,
    tareas: Array
})

const emit = defineEmits(['actualizarMensaje']);

const handleEventEmit = () => {
    emit('actualizarMensaje', 'Hola desde el hijo')
}

</script>


<template>
    <!-- Este es el HTML del componente -->
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Componente Hijo</h5>
            <!-- Aquí se muestra el mensaje que se pasa como prop desde el
    componente padre -->
            <p class="card-text">{{ mensaje }}</p>
            <!-- Este botón llama al método emitirEvento cuando se hace clic
    en él -->
            <button class="btn btn-success" v-on:click="handleEventEmit">Cambiar
                Mensaje</button>
            <!-- Este párrafo se muestra solo si mensajeCambiado es verdadero
    -->
            <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
        </div>
    </div>
</template>