import React from 'react'
import {shallow} from 'enzyme'
import App from '../../app/app.component'

describe('App component', () => {
  it('should ', () => {
    const app = shallow(<App />)
    expect(app.text()).toBe('App')
  })
})
