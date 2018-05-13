import React from 'react'
import {mount} from 'enzyme'
import Home from '../../app/home.component';
import {FlatButton} from 'material-ui'

describe('Home component', () => {
  it('should ', () => {
    const home = mount(<Home />)
    expect(home).toBe(null)
    expect(home.html()).toBeNull()
  })
})
