import type {  Appdispath, RootState } from "../index"
import { useDispatch, useSelector } from "react-redux"

export const useAppDispath =  useDispatch.withTypes<Appdispath>()

export const useAppSeclector =  useSelector.withTypes<RootState>()