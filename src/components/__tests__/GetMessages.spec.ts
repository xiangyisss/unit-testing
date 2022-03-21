import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import GetMessagesVue from "../GetMessages.vue";

describe('GetMessages', () => {
    it('calls getMessage From Api and display messages', () => {
        const wrapper = mount(GetMessagesVue)
    })

    it('display error message when call fails', () => {
        const wrapper = mount(GetMessagesVue)
    })
})