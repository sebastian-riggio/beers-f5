import {Beer} from "./beer"
export type FormType = Omit<Beer,"image_url"|"_id">