/**
 * External Dependencies
 */
import classnames from 'classnames'

/**
 * WordPress Dependencies
 */
import {
  InnerBlocks,
  RichText,
} from '@wordpress/editor'

/**
 * Block render component
 */
const Render = (props) => {
  const {
    attributes: {
      anchor,
      headerContent,
      openByDefault,
    },
  } = props

  const wrapperClasses = classnames(
    'td-accordion',
    openByDefault ? 'td-accordion--open' : '',
  )

  const headerClasses  = classnames('td-accordion__header')
  const contentClasses = classnames('td-accordion__content')

  // Build wrapper attributes
  const wrapperAttributes = {
    className: wrapperClasses,
  }

  // Add an id if the anchor is set
  if (anchor !== '') {
    wrapperAttributes.id = anchor
  }

  return (
    <div {...wrapperAttributes}>
      <div className={headerClasses}>
        <RichText.Content tagName='p' value={headerContent} />
      </div>
      <div className={contentClasses}>
        <InnerBlocks.Content />
      </div>
    </div>
  )
}

export default Render
