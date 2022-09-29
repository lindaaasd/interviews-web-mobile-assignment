using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using xtream.Core.Entities;
using xtream.Core.Interface;

namespace xtream.Core.BusinessLayer
{
    public class MainBusinessLayer : IBusinessLayer
    {

        private readonly IRepositoryPost postRepo;

        public MainBusinessLayer(IRepositoryPost postRepo)
        {
            this.postRepo = postRepo;
        }


        #region Post methods
        public int AddNewPost(Post post)
        {
            if(post == null)
                return 0;
            return postRepo.Add(post);
        }

        public bool DeletePost(Post post)
        {
            if(post.Id == 0)
                return false;
            return postRepo.Delete(post);
        }

        public List<Post> FetchAllPosts()
        {
            return postRepo.FetchAll();
        }

        public List<Post> FetchPaginatedPosts(int pageNum, int pageLength)
        {
            return postRepo.FetchAllPaginated(pageNum, pageLength);
        }

        public Post GetPostById(int id)
        {
            if(id == 0) return null;

            return postRepo.GetById(id);
        }

        public bool UpdatePost(Post post)
        {
            if(post.Id == 0) return false;

            return postRepo.Update(post);
        }

        #endregion
    }
}
