import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {recommendations as mRecommendations}from '../global/data/recommendation-data'

const RecommendationDataContext = React.createContext();

const RecommendationDataProvider = (props) => {
    const [recommendations, setRecommendations] = useState(mRecommendations);


    return <RecommendationDataProvider.Provider value = {{recommendations, setRecommendations}}>
        {props.children}
    </RecommendationDataProvider.Provider>
}

export  {RecommendationDataProvider, RecommendationDataContext}
