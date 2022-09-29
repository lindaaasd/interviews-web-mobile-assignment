using xtream.Core.Entities;
using xtream.WebApi.Models;

namespace xtream.WebApi.Mappings
{
    public class Mapper : AutoMapper.Profile
    {
        public Mapper()
        {
            CreateMap<PostViewModel, Post>();
            CreateMap<Post, PostViewModel>();

        }
    }
}
