using Microsoft.EntityFrameworkCore;
using xtream.Core.Entities;

namespace xtream.CoreEF
{
    public class xtreamContextDB: DbContext
    {
        public DbSet<Post> Posts { get; set; }

        public xtreamContextDB()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //for macOS users use 
            // const string connectionString = (@'Server=localhost;Database=xtreamDb;User Id = someuser;Password=mySecretMacPassword;Initial Catalog = xtreamDb;"

            const string connectionString = (@"Data Source=(localdb)\MSSQLLocalDB;
											   Initial Catalog=xtreamDB;
											   Integrated Security=True;
											   Connect Timeout=30;
											   Encrypt=False;
											   TrustServerCertificate=False;
											   ApplicationIntent=ReadWrite;
											   MultiSubnetFailover=False");

            optionsBuilder.UseSqlServer(connectionString);
        }

    }
}