<script lang="ts">
    import InfoOverly from './info/InfoOverly.svelte';
    import KeyBinding from './info/KeyBinding.svelte';
    import Logo from './Logo.svelte';
    import Setting from './setting/Setting.svelte';
    import TimerWidget from './TimerWidget.svelte';
    import WalWidget from './WalWidget.svelte'
</script>

<div class="main">
    <Setting/>
    <Logo/>
    <TimerWidget/>
    <WalWidget/>
    <InfoOverly/>
    <KeyBinding/>
</div>
