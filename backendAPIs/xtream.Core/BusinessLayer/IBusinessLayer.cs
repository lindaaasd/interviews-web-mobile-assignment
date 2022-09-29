using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using xtream.Core.Entities;

namespace xtream.Core.BusinessLayer
{
    public interface IBusinessLayer
    {
        #region Post

        List<Post> FetchAllPosts();

        Post GetPostById(int id);

        int AddNewPost(Post post);

        bool DeletePost(Post post);

        bool UpdatePost(Post post);

        List<Post> FetchPaginatedPosts(int pageNum, int pageLength);

        #endregion
    }
}
