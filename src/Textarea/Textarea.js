import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inputClass } from '../styles'
import cleanProps from '../utils/cleanProps'

class Textarea extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
    }

    this.bindShadow = this.bindShadow.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  bindShadow(el) {
    this.shadow = el
  }

  handleChange(e) {
    this.props.onChange(e.target.value)

    if (this.props.autosize) {
      this.shadow.value = e.target.value
      const height = this.shadow.scrollHeight
      this.setState({ height })
    }
  }

  render() {
    const { autosize, onChange, ...props } = this.props
    const height = this.state.height || 'auto'

    const className = autosize ? inputClass('auto-size') : ''

    const ts = [
      <textarea
        {...cleanProps(props)}
        key="t"
        className={className}
        style={{ height }}
        onChange={this.handleChange}
      />,
    ]

    if (autosize) {
      ts.push((
        <textarea
          key="s"
          ref={this.bindShadow}
          className={inputClass('shadow')}
          rows={props.rows}
          defaultValue={props.value}
        />
      ))
    }

    return ts
  }
}

Textarea.propTypes = {
  autosize: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Textarea.defaultProps = {
  value: '',
  rows: 4,
}

export default Textarea
