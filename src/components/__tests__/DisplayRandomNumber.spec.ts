import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import DisplayRandomNumberVue from "../DisplayRandomNumber.vue";


describe('DisplayRandomNumberVue', () => {
    it('by default, random number should be 0 ', () => {
        const wrapper = mount(DisplayRandomNumberVue)
        expect(wrapper.find('span').text()).toContain(0)
    })

    it('if button clicked, random number should be between 1 to 10', async () => {
        const wrapper = mount(DisplayRandomNumberVue, {
            props: {
                min:1,
                max: 10
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })

    it('if button clicked, random number should be between 200 to 300', async () => {
        const wrapper = mount(DisplayRandomNumberVue, {
            props: {
                min: 200,
                max: 300
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})