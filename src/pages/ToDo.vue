<template>
    <div>
        <h1 class="to-do">To do {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ToDo',
    props: ['doCheck', 'removeMask', 'needDoList', 'completeList'],
};
</script>
