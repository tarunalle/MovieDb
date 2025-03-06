import { useDispatch, useSelector } from "react-redux";
import { setPageNo } from "../redux/pageSlice";

const Pages = () => {
    const dispatch = useDispatch();
    const pageNo = useSelector((state) => state.pagination.pageNo); // 🔹 Get pageNo from Redux store
    console.log("pageNo2=======", pageNo)

    const nextButtons = Array.from({ length: 7 }, (_, index) => pageNo + index);

    return (
        <div className="pages">
            {pageNo > 1 && (<button onClick={() => dispatch(setPageNo(pageNo - 1))}>Prev</button>)}

            {nextButtons.map((page) => (
                <button key={page} onClick={() => dispatch(setPageNo(page))} id={page === pageNo ? "active" : ""}>
                    {page}
                </button>
            ))}

            <button onClick={() => dispatch(setPageNo(pageNo + 1))}>Next</button>
        </div>
    );
};

export default Pages;
