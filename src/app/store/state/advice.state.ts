import { Injectable } from "@angular/core";
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Define the state model (empty for now)
export interface AdviceStateModel {
  // Add properties to the state as needed
}

export const initialState: AdviceStateModel = {
  // Initialize state properties with default values
};

@Injectable()
export class AdviceState {
  // If you need to manage actions or reducers, this is where it goes
}

// Feature selector to access the AdviceState
export const selectAdviceState = createFeatureSelector<AdviceStateModel>('adviceState');

// Example selector to access a part of the state (add more if needed)
export const selectAdvice = createSelector(
  selectAdviceState,
  (state: AdviceStateModel) => state // Replace with actual logic when needed
);
