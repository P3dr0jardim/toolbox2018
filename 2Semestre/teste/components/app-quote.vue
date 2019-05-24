<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2>The quote</h2>
                    <p>A wonderful quote</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
import quote from './components/quote.vue';

export default {
    components:{
        appQuote: quote
    }    
}
</script>
<style>
div{
    background-color: white;
    box-shadow: 0 0 24px rgba(0,0,0,0.3);
    padding: 3rem;
    width: 420px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}
</style>

