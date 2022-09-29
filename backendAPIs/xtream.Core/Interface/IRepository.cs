using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xtream.Core.Interface
{
    public interface IRepository<T>
    {
        List<T> FetchAll(Func<T, bool> filter = null);

        public int Add(T item);

        public T GetById(int id);

        public bool Update(T item);

        public bool Delete(T item);
    }
}
