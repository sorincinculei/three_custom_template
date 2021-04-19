import React, { useEffect, useMemo } from 'react'
import * as THREE from 'three'

import Roboto from '../../../publish/bold.json'

import Text from './Text'
import _ from 'lodash'
const Phrase = ({data, index, size}) => {
    
    const font = new THREE.FontLoader().parse(Roboto)

    return (
        <group
            position={[0, 0, 0]}
        >
            {
                 _.map(data, (p, i) => {
                    const sizeP = _.size(data)
                    return (
                        <Text
                            key={i}
                            data={p}
                            index={i}
                            size={sizeP}
                            font={font}
                        />
                    )
                })
            }
        </group>

    )
}

export default Phrase