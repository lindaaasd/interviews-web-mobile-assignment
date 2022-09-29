using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using xtream.Core.Entities;

namespace xtream.Core.Interface
{
    public interface IRepositoryPost: IRepository<Post>
    {
        List<Post> FetchAllPaginated(int pageNum, int pageLength, Func<Post, bool> filter = null);
    }
}
