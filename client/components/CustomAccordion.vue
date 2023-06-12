<template>
    <CAccordion>
        <CAccordionItem :item-key="1">
            <CAccordionHeader>1</CAccordionHeader>
            <CAccordionBody>
                <slot></slot>
            </CAccordionBody>
        </CAccordionItem>
    </CAccordion>
</template>
<script>
import {CAccordion, 
    CAccordionItem, 
    CAccordionHeader, 
    CAccordionBody}
from '@coreui/vue';
/** 
export default {
    components: {
        CustomAccordion
    }
}*/
</script>
