<template>
    <div class="header">
        <div class="container">
            <div class="logo" @click="$router.push('/')">ToDo List</div>
            <div class="form">
                <input
                    type="text"
                    v-model="valueInput"
                    @keypress.enter="addTask(valueInput), (valueInput = '')"
                />
                <button
                    class="btn"
                    @click="addTask(valueInput), (valueInput = '')"
                >
                    Add a new task
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['addTask'],
    data() {
        return {
            valueInput: '',
        };
    },
};
</script>
