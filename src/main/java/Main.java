import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args){

        EntityManagerFactory factory = Persistence.createEntityManagerFactory("courseManagerPersistenceUnit");
        EntityManager em = factory.createEntityManager();
        EntityTransaction tx = em.getTransaction();
        //Course course = new Course (null, "Principles of Java", "CS100","Tom",null);
        List<Course> courses = new ArrayList<>();
       // courses.add(course);
       // Student student = new Student(null, "Dexter","Ponts","8",courses);
        TypedQuery<Student> query = em.createQuery("select s from Student s where id = 1", Student.class);
        Student student = query.getSingleResult();
        TypedQuery<Course> courseQuery = em.createQuery("select c from Course c where id = 1", Course.class);
        Course course = courseQuery.getSingleResult();
        course.getStudents().add(student);
        tx.begin();
        em.persist(course);
        tx.commit();

    }

}
