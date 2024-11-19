<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <Link :href="'/'">
        <!-- Replace the SVG with an img tag for PNG -->
        <img
             class="h-20 w-auto" src="../../images/.logo.png" alt=""
        />
    </Link>
</template>