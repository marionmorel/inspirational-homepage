import React from 'react';
import Goal from './Goal';
import AddGoal from './AddGoal'

const GoalsList = () => {
    return (
        <div className="goals-list">
            <AddGoal />
            <Goal />
            <Goal />
            <Goal />
        </div>
    )
}

export default GoalsList;