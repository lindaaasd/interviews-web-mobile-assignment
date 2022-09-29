using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using xtream.Core.BusinessLayer;
using xtream.Core.Entities;
using xtream.WebApi.Models;


namespace xtream.WebApi.Controllers
{
    [Route("api/Posts")]
    public class PostController : Controller
    {

        private readonly IBusinessLayer _bl;
        private readonly IMapper _mp;

        public PostController(IBusinessLayer bl, IMapper mp)
        {
            _bl = bl;
            _mp = mp;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Post> posts = _bl.FetchAllPosts();

            List<PostViewModel> postsVM = new List<PostViewModel>();

            foreach (var post in posts)
                postsVM.Add(_mp.Map<PostViewModel>(post));
            return Ok(postsVM);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetPostByID(int id)
        {
            var post = _bl.FetchAllPosts().Where(c => c.Id == id);
            if (id == 0)
                return NotFound("Post not found");

            return Ok(post);
        }

        [HttpPost]
        public IActionResult AddNewPost([FromBody] PostViewModel postsVM)
        {
            if (postsVM == null)
                return BadRequest("Invalid data received");
            Post post = _mp.Map<Post>(postsVM); // maping from postVM to post;
            var result = _bl.AddNewPost(post);
            if (result == 0)
                return StatusCode(500, "Cannot add new post.");
            return Ok(result);

        }

        [HttpGet]
        [Route("EditPost")]
        public IActionResult Edit(int id)
        {
            var postsVM = _mp.Map<PostViewModel>(_bl.GetPostById(id)); //mapping to chilliVM

            return View(postsVM);
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdatePost(int id, [FromBody] PostViewModel updatedPostVM)
        {
            updatedPostVM.Id = id;
            var post = _bl.GetPostById(updatedPostVM.Id);
            post = _mp.Map<Post>(updatedPostVM); // mapping to original Chilli
            _bl.UpdatePost(post);

            return Ok(post);

        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeletePostByID(int id)
        {
            var postToRemove = new Post { Id = id };

            bool result = _bl.DeletePost(postToRemove);
            if (result == false)
                return StatusCode(500, "Cannot delete the post.");
            return Ok();

        }

        [HttpGet]
        [Route("/getAll")]
        public IActionResult IndexPaginated(int pageNum, int pageLength)
        {
            List<Post> posts = _bl.FetchPaginatedPosts(pageNum, pageLength);

            List<PostViewModel> postVM = new List<PostViewModel>();

            foreach (var post in posts)
                postVM.Add(_mp.Map<PostViewModel>(post));
            return Ok(postVM);
        }
    }
}
