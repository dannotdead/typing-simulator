import React from 'react'
import store from '../../store/store'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import {ITheme} from '../../const/theme'

const SliderTemplate = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.mainText};
`

const SliderBody = styled.input`
  -webkit-appearance: none;
  margin-right: 15px;
  height: 7px;
  background: ${({theme}: {theme: ITheme}) => theme.mainText};
  border-radius: 5px;
	width: 100%;
	
	&::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${({theme}: {theme: ITheme}) => theme.secondary};
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 ${({theme}: {theme: ITheme}) => theme.gray};
	}
`

const NumberOfSentences = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
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