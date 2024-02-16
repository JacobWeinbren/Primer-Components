<script>
    import '@/src/tailwind.css';
    export let name = 'World'; 
    export let restProps = {};
</script>

<div {...restProps}>
    <p class="text-lg font-bold">Hello, <b>{name}</b>!</p>
    <button
        class="p-2 text-2xl text-green-200 bg-orange-200 rounded-full dark:text-white"
    >
        Hello world!
    </button>
</div>