import PropTypes from 'prop-types';
import { useContext, useCallback, memo } from 'react';

import { AppContext } from '../../providers/context';
import { Wrapper, TransactionDate, Value, Comment, Icon } from './styles';
import Star from '../../assets/img/star1.png';
import StarFilled from '../../assets/img/star.png';

const Transaction = memo(({ transaction: {id, value, date, comment, isStarred}, onDelete, onStarClick }) => {
    const {state} = useContext(AppContext);

    const deleteItem = useCallback(() => onDelete(id), [id]);

    return (
        <Wrapper value={value}>
            <Icon onClick={() => onStarClick(id)}>
                <img src={isStarred ? StarFilled : Star}/>
            </Icon>
            
            <TransactionDate>{date}</TransactionDate>
            <Value>{value.toFixed(2)}, {state.currency}</Value>
            <Comment>{comment}</Comment>
            <button onClick={deleteItem}>Delete</button>
        </Wrapper>
    );
})

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    }),
    onStarClick: PropTypes.func
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction