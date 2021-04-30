<script lang="ts">
    export let name: string;
    export let visible: boolean = true
    export let isLast: boolean = false

    const nameAsLastItem = '🎉 ' + name + ' 🎉'
    const shufflingText = '... shuffling ...'

    $: {
        console.log(name, visible, isLast);
        name = isLast ? nameAsLastItem : name
    }
</script>

{#if visible}
    <div class="title tracking-in-expand">
        <div>{isLast && visible ? nameAsLastItem : name}</div>
    </div>
{:else}
    <div class="title">
        {shufflingText}
    </div>
{/if}
