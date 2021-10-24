<!-- Template for Home -->

<template>
    <hello-world />
</template>

<script>
    /* Using components */

    import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'Home',

        components: {
            HelloWorld,
        },
    }
</script>
