<script setup lang="ts">
import { columns } from "~/components/DataTable/columns";
import DataTable from "~/components/DataTable/table.vue";
import tasks from "@/data/tasks.json";
</script>

<template>
  <div>
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>
