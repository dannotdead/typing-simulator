import React from 'react'
import store from '../../store/store'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'

const SliderTemplate = styled.div`
	color: #99D6EA;
`

const SliderBody = styled.input`
  -webkit-appearance: none;
  margin-right: 15px;
  height: 7px;
  background: #99D6EA;
  border-radius: 5px;
	width: 100%;
	
	&::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #F9A620;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
	}
`

const NumberOfSentences = styled.div`
	color: #F9A620;
	text-align: center;
`

const DifficultySlider = observer(() => {
	return (
		<SliderTemplate>
			<div>Кол-во предложений</div>
			<SliderBody
				type='range'
				min={1}
				max={5}
				defaultValue={store.numberOfSentences}
				onChange={(event) => store.changeNumberOfSentences(event.target.value)}
			/>
			<NumberOfSentences>{store.numberOfSentences}</NumberOfSentences>
		</SliderTemplate>
	)
})

export default DifficultySlider