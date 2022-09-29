using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using xtream.Core.Entities;
using xtream.Core.Interface;

namespace xtream.CoreEF.Repositories
{
    public class RepositoryPostEF : IRepositoryPost
    {

        private readonly xtreamContextDB _xtreamCtx;

        public RepositoryPostEF(xtreamContextDB xtreamCtx)
        {
            _xtreamCtx = xtreamCtx;
        }

        public int Add(Post post)
        {
            _xtreamCtx.Posts.Add(post);
            _xtreamCtx.SaveChanges();
            return post.Id;
        }

        public bool Delete(Post post)
        {
            _xtreamCtx.Posts.Remove(post);
            _xtreamCtx.SaveChanges();
            return true;
        }

        public List<Post> FetchAll(Func<Post, bool> filter = null)
        {
            if (filter != null)
                return _xtreamCtx.Posts.Where(filter).ToList();
            return _xtreamCtx.Posts.ToList();
        }

        public List<Post> FetchAllPaginated(int pageNum, int pageLength, Func<Post, bool> filter = null)
        {
            if (filter != null)
                return _xtreamCtx.Posts.Where(filter).Skip(pageNum * pageLength).Take(pageLength).ToList();
            return _xtreamCtx.Posts.Skip(pageNum * pageLength).Take(pageLength).ToList();
        }

        public Post GetById(int id)
        {
            return _xtreamCtx.Posts.AsNoTracking().FirstOrDefault(p => p.Id == id);
        }

        public bool Update(Post post)
        {
            _xtreamCtx.Posts.Update(post);
            _xtreamCtx.SaveChanges();
            return true;
        }
    }
}
