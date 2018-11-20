import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Container from '@/components/Container';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('@/components/Container', () =>
{
	describe('interaction', () =>
	{
		let wrapper;

		beforeEach(() =>
		{
			wrapper = mount(Container, {
				localVue
			});
		});

		test('it should display a child-block', () =>
		{
			const block = wrapper.find('[data-block-id="TestBlock"]');

			expect(block.exists()).toBeTruthy();
		});
	});
});
