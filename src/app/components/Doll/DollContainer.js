import { compose } from 'recompose'
import { connect } from 'react-redux'

import Doll from './Doll'

import * as selectors from '../../store/selectors'

const mapStateToProps = (state) => ({
  ...selectors.getCurrentLook(state),
})

export default compose(
  connect(mapStateToProps),
)(Doll)