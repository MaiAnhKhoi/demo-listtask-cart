import { tasksList } from "../../data/Task";
import { useEffect } from "react";

type FilterType = "all" | "completed" | "id" | "title" | "createdAt" | "updatedAt";
type SortType = "asc" | "desc" | "completed" | "incomplete";

type FilterTuple = [FilterType, SortType];

export const Filter = (props : {onComplete: (key: string) => void , checkComplete: boolean, onFilter: (filterTuple: FilterTuple) => void, filter: FilterTuple}) => {
    const keys: string[] = ["all", ...Object.keys(tasksList[0])];
    const [currentFilter, currentSort] = props.filter;

    useEffect(() => {
        if (props.checkComplete && !["completed", "incomplete"].includes(currentSort)) {
        props.onFilter([currentFilter, "completed"]);
        }

        if (!props.checkComplete && !["asc", "desc"].includes(currentSort)) {
        props.onFilter([currentFilter, "asc"]);
        }
    }, [props.checkComplete])

    const handleFIlterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterType = e.target.value as FilterType;
        props.onFilter([filterType, currentSort]);
        props.onComplete(filterType);
    }

    const handleFilterSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortType = e.target.value as SortType;
        props.onFilter([currentFilter, sortType]);
    }
    
    return (
        <div>
            <select value={props.filter[0]} onChange={handleFIlterChange}>
                {keys.map((key, index) => (
                    <option key={index} value={key}>{key}</option>
                ))}
            </select>
            <select value={props.filter[1]} name="filter" id="filter" onChange={handleFilterSortChange}>
                {props.checkComplete ? 
                <>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </> : 
                <>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </>
                }   
            </select>
        </div>
    );
}