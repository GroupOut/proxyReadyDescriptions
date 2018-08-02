import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../client/components/description';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe('the Description Component', () => {
  it('should render Description', () => {
    const wrapper = shallow(<Description />, { context: {}, disableLifecycleMethods: false })
    // console.log(wrapper.debug())
  })

  it('should contain 1 form element', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('form').length).toBe(1)
  })

  it('should contain 1 Description Wrapper', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('.descrip').exists()).toBe(true)
  })

  it('should contain 8 divs', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('div').length).toBe(8)
  })

  it('matches the snapshot', () => {
    const tree = shallow(<Description />)
    expect(toJson(tree)).toMatchSnapshot()
  })

})

describe('the Description Component State Handling', () => {
  it('updates ExclusionsComponent with new State', () => {
    const wrapper = shallow(<Description />)
    expect(wrapper.find('.exclusions').exists()).toBe(false)
    wrapper.setState({ deal: { exclusions: 'Must be over 42 in. tall' } })
    expect(wrapper.find('.exclusions').exists()).toBe(true)
  })
})

describe('the Description Lifecycle & Methods', () => {
  it('calls componentDidMount', () => {
    jest.spyOn(Description.prototype, 'componentDidMount')
    const wrapper = shallow(<Description />)
    expect(Description.prototype.componentDidMount.mock.calls.length).toBe(1)
    wrapper.unmount()
  })

  it('calls getDescripInfo in ComponentDidMount', (done) => {
    const wrapper = shallow(<Description />)
    wrapper.instance().getDescripInfo = jest.fn()
    wrapper.instance().componentDidMount()
    done()
    expect(wrapper.instance().getDescripInfo).toBeCalled()
  })

  // it('calls handleSubmit on click', (done) => {
  //   const wrapper = shallow(<Description />)
  //   const submitButton = wrapper.find('.submitButton')
  //   wrapper.instance().handleSubmit = jest.fn()
  //   submitButton.simulate('click')
  //   done()
  //   expect(wrapper.instance().handleSubmit).toBeCalled()
  // })

})