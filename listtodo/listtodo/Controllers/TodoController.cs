using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using td;
using tdc;

namespace Controllerns
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private static List<Todo> _todos = new List<Todo>();
        TodoContext _entityframework;
        public TodosController(IConfiguration config)
        {
            _entityframework = new TodoContext(config);
        }
        [HttpGet("GetTasks")]

        public IEnumerable<Todo> GetTasks()
        {
            IEnumerable<Todo> todo= _entityframework.todoset.ToList<Todo>();
   
            return todo;
        }

        [HttpPut("EditTasks")]

        public IActionResult EditTasks(Todo todo)
        {
            Todo? td = _entityframework.todoset.Where(u => u.id == todo.id).FirstOrDefault<Todo>();
            if(td != null)
            {
                td.description = td.description;
                td.isCompleted = todo.isCompleted;
            }
            if(_entityframework.SaveChanges()>0)
            {
                return Ok();
            }
            throw new Exception("Failed to Update Task");
        }

        

        [HttpPut("AddTasks")]

        public IActionResult AddTasks(Todo todo)
        {
            Todo td = new Todo();
            td.id = todo.id;
            td.description = todo.description;
            td.isCompleted = todo.isCompleted;
            _entityframework.Add(td);
            if (_entityframework.SaveChanges() > 0)
            {
                return Ok();
            }
            throw new Exception("Failed to Add Task");
        }

        [HttpDelete("DeleteTasks")]

        public IActionResult DeleteTasks(int id)
        {
            Todo? td = _entityframework.todoset.Where(u => u.id ==id).FirstOrDefault<Todo>();
            _entityframework.Remove(td);
            if (_entityframework.SaveChanges() > 0)
            {
                return Ok();
            }
            throw new Exception("Failed to Delete Task");
        }
        //[HttpPost("Addtasks")]
        //public IEnumerable<Todo> Addtasks()
        //{

        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{

        //}

        //private ActionResult<Todo> GetById(int id)
        //{

        //}
    }
}