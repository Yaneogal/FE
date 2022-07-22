import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/module/post";
import Header from "../components/share/Header";
import FilterButton from "../components/filter/FilterButton";
import MenuPost from "../components/filter/MenuPost";
import FilterPost from "../components/filter/FilterPost";
import SearchWrite from "../components/search/SearchWrite";
import "../css/filter.css";

const size = 5;

const Filter = () => {
  const dispatch = useDispatch();
  const region = useParams().keyword;

  const posts = useSelector((state) => state.post.contents);
  const filtercontents = useSelector((state) => state.post.filtercontents);
  const isLoading = useSelector((state) => state.post.isLoading);
  const nextPage = useSelector((state) => state.post.paging?.next);
  const lastPage = useSelector((state) => state.post.paging?.last);

  const [page, setPage] = useState(nextPage);
  const is_filtercontents = filtercontents ? true : false;

  const checkHasIncode = (value) => {
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (value === undefined) {
      return (value = "");
    }

    if (value.match(check_kor)) {
      const encodeKeyword = encodeURI(value);
      return encodeKeyword;
    } else {
      return value;
    }
  };

  const loadLatestPost = () => {
    const region_ = checkHasIncode(region);
    dispatch(userAction.regionGETDB(region_, page, size));
  };

  useEffect(() => {
    setPage(nextPage);
  }, [nextPage]);

  useEffect(() => {
    loadLatestPost();

    return () => {
      dispatch(userAction.initPagingDB());
      dispatch(userAction.clearDB());
    };
  }, [region]);

  return (
    <>
      <Header />
      <SearchWrite />
      <FilterButton region={region} />
      <div className="filter-container">
        <div className="filter-content">
          <div className="filter-category">
            {is_filtercontents === false ? (
              <FilterPost
                posts={filtercontents}
                isLoading={isLoading}
                size={size}
                page={page}
                lastPage={lastPage}
              />
            ) : (
              <MenuPost
                posts={posts}
                isLoading={isLoading}
                size={size}
                page={page}
                lastPage={lastPage}
                region={region}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;