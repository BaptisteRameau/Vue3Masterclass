<template>
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"/>
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList'
import { ref } from 'vue'

const threads = ref(sourceData.threads)
</script>
