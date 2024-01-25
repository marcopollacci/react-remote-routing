import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  getCurrentPageType,
  LoadingComponentProps,
} from "../interfaces/loadingComponent.ts";
import { createTrackedSelector } from "react-tracked";

interface RoutingStoreInterface {
  listOfPages: LoadingComponentProps[];
  rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => void;
  getCurrentPage: (location: string) => getCurrentPageType;
  getHomePage: () => getCurrentPageType;
}

const EMPTY_PAGE: getCurrentPageType = {
  path: "",
  name: "",
};

const routingStore = create<RoutingStoreInterface>()(
  devtools((set, get) => ({
    listOfPages: [],
    rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => {
      set({ listOfPages });
    },
    getHomePage: () => getRequestedPage("/", get().listOfPages),
    getCurrentPage: (location: string) =>
      getRequestedPage(location, get().listOfPages),
  })),
);

/**
 * The function `getRequestedPage` takes a location and a list of pages, and returns the page object that matches the given
 * location.
 * @param {string} location - A string representing the current location or path of the page being requested.
 * @param {LoadingComponentProps[]} listOfPage - An array of objects representing different pages. Each object has the
 * following properties:
 * @returns The function `getRequestedPage` returns an object of type `getCurrentPageType` which has properties `path` and
 * `name`.
 */
const getRequestedPage = (
  location: string,
  listOfPage: LoadingComponentProps[],
) => {
  const pageRequested = listOfPage.find((page) => page.path === location);
  if (!pageRequested) {
    return EMPTY_PAGE;
  }
  return {
    path: pageRequested.path,
    name: pageRequested.name,
  } as getCurrentPageType;
};

export const useRoutingStore = createTrackedSelector(routingStore);
