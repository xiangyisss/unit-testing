import { describe, it, expect } from "vitest";
import { shallowMount } from '@vue/test-utils';
import LoginFormVue from "../LoginForm.vue";

describe('LoginFormVue', () => {
    it('emits an event with username payload', async () => {
        const wrapper = shallowMount(LoginFormVue)
        const Input = wrapper.find('[data-testid="name-input"]')
        await Input.setValue('Xiang')
        await wrapper.find('button').trigger('submit')

        const emittedOptions = wrapper.emitted('submitform')
        expect(emittedOptions[0][0]).toBe('Xiang')

    })
})