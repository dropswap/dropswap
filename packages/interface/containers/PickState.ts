import { Reducer, useCallback, useReducer, useState } from 'react';
import { createContainer } from 'unstated-next';

enum Step {
  None,
  Dragging,
  Confirming,
}

interface State {
  step: Step;
}

const INITIAL_STATE = { step: Step.None };

type Action = { type: 'cancel' } | { type: 'drag' } | { type: 'drop' } | { type: 'confirm' };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'cancel':
    case 'confirm':
      return { step: Step.None };
    case 'drag':
      return { step: Step.Dragging };
    case 'drop':
      return { step: Step.Confirming };
  }
};

function usePickState() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onDrag = useCallback(() => dispatch({ type: 'drag' }), []);
  const onDrop = useCallback(() => dispatch({ type: 'drop' }), []);
  const onCancel = useCallback(() => dispatch({ type: 'cancel' }), []);
  const onConfirm = useCallback(() => dispatch({ type: 'confirm' }), []);

  const show = state.step !== Step.None;

  return { show, onDrag, onDrop, onCancel, onConfirm };
}

export const PickState = createContainer(usePickState);
