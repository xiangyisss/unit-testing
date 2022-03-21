import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'


describe('Helloworld', () => {
	it('renders props properly', () => {
		const wrapper = mount(HelloWorld, { props : {msg : 'Hello' }})
		expect(wrapper.find('[data-testid="msg"]'))
	})
})