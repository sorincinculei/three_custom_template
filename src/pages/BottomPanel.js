import React, { useState } from 'react'
import { Box, Layer, Text, Button, Heading, TextInput } from 'grommet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileImage, faCube, faExpand } from '@fortawesome/free-solid-svg-icons'

import colors from '../constants/colors'

const BottomPanel = () => {

    const exports = (
        <Box align='start' gap='xsmall' pad={{ right: 'small' }}>
            <Text color={colors.LIGHT_NAVY_BRIGHT} size='small'>
                Export
            </Text>
            <Box direction='row' align='center' gap='xsmall'>
                <Button
                    secondary
                    icon={<FontAwesomeIcon icon={faFileImage} />}
                    tip={'Export png'}
                />
                <Button
                    secondary
                    icon={<FontAwesomeIcon icon={faFileImage} />}
                    tip={'Export JPG'}
                />
                <Button
                    secondary
                    icon={<FontAwesomeIcon icon={faFilePdf} />}
                    tip={'Export PDF'}
                />
                <Button
                    secondary
                    icon={<FontAwesomeIcon icon={faCube} />}
                    tip={'Export OBJ'}
                />
            </Box>
        </Box>
    )

    const actions = (
        <Box align='start' gap='xsmall' pad={{ left: 'small' }} border='left'>
            <Text color={colors.LIGHT_NAVY_BRIGHT} size='small'>
                Actions
            </Text>
            <Box direction='row' align='center' gap='xsmall'>
                <Button
                    secondary
                    icon={<FontAwesomeIcon icon={faExpand} />}
                    tip={'Full Screen'}
                />
            </Box>
        </Box>
    )

    return (
        <Layer modal={false} position='bottom' plain margin='0px'>
            <Box
                height={'70px'}
                round={{ size: 'small', corner: 'top' }}
                pad={{ top: 'xsmall', horizontal: 'small' }}
                direction='row'
                background={colors.WHITE}
            >
                {exports}
                {actions}
            </Box>
        </Layer>
    )
}

export default BottomPanel