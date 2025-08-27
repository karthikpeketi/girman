# Spring Boot Interview Questions Guide
*From Basic to Advanced Level - Explained in Simple English*

## Table of Contents
1. [Basic Level Questions (1-15)](#basic-level-questions)
2. [Intermediate Level Questions (16-35)](#intermediate-level-questions)
3. [Advanced Level Questions (36-55)](#advanced-level-questions)
4. [Expert Level Questions (56-65)](#expert-level-questions)

---

## Basic Level Questions

### 1. What is Spring Boot?

**Simple Answer:** Spring Boot is like a smart helper for Java developers. Instead of writing lots of setup code, Spring Boot does most of the work for you automatically.

**Technical Answer:** Spring Boot is a Java framework that makes it easier to create applications. It removes complicated configurations and provides ready-to-use templates.

**Real Example:** Think of it like ordering a combo meal at McDonald's vs. ordering each item separately. Spring Boot gives you everything together.

---

### 2. What's the difference between Spring and Spring Boot?

**Simple Answer:** 
- **Spring** = Empty house (you bring everything yourself)
- **Spring Boot** = Furnished house (everything is already set up for you)

**Key Differences:**
- Spring requires lots of manual setup
- Spring Boot has automatic setup
- Spring Boot includes a built-in web server
- Spring Boot is faster to start projects

---

### 3. What are the main features of Spring Boot?

**Easy Features:**
1. **Auto-Configuration** - Sets up everything automatically
2. **Starter Packages** - Ready-made bundles for common tasks
3. **Embedded Server** - Built-in web server (no need to install separately)
4. **Spring Boot Actuator** - Health check tools
5. **Spring Initializer** - Website to download starter projects

**Analogy:** Like a smartphone that comes with pre-installed apps vs. buying an empty phone.

---

### 4. What are Spring Boot Starters?

**Simple Answer:** Starters are like toolkits. When you want to build a website, you get the "web starter" which includes all the tools you need.

**Common Starters:**
- `spring-boot-starter-web` - For web applications
- `spring-boot-starter-data-jpa` - For database work
- `spring-boot-starter-security` - For security features
- `spring-boot-starter-test` - For testing

**Example:** Like buying a complete home repair kit instead of buying each tool separately.

---

### 5. How do you create a Spring Boot application?

**Step-by-Step:**
1. Go to `start.spring.io` (Spring Initializer website)
2. Choose your project settings
3. Add dependencies (like web, database)
4. Download the project
5. Open in your IDE (like Eclipse or IntelliJ)
6. Run the main class

**Code Example:**
```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

---

### 6. What does @SpringBootApplication do?

**Simple Answer:** It's like a magic wand that combines three important instructions into one:

1. **@Configuration** - "This class has settings"
2. **@EnableAutoConfiguration** - "Set everything up automatically"
3. **@ComponentScan** - "Look for other components in this package"

**Analogy:** Like saying "Set up my entire office" instead of saying "Get a desk, get a chair, get a computer" separately.

---

### 7. What is application.properties file?

**Simple Answer:** It's like a settings file where you can change how your app behaves without changing the code.

**Common Settings:**
```properties
# Change port from 8080 to 9000
server.port=9000

# Database settings
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret

# App name
spring.application.name=MyApp
```

**Benefit:** Change settings without touching the main code!

---

### 8. How do you run Spring Boot on a different port?

**Simple Steps:**
1. Open `application.properties` file
2. Add this line: `server.port=8081`
3. Save and restart your app

**Default:** Spring Boot runs on port 8080
**Custom:** You can change it to any available port

---

### 9. What is Spring Boot DevTools?

**Simple Answer:** DevTools is like having an assistant that automatically restarts your app when you make changes.

**What it does:**
- Automatically restarts when you change code
- Refreshes the browser automatically
- Faster development experience

**How to add:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

---

### 10. What are embedded servers?

**Simple Answer:** Instead of installing a separate web server, Spring Boot includes one inside your app.

**Available Servers:**
- **Tomcat** (default) - Most common
- **Jetty** - Lightweight alternative  
- **Undertow** - High-performance option

**Analogy:** Like a food truck (everything built-in) vs. renting a restaurant space.

---

### 11. What is @RestController?

**Simple Answer:** It tells Spring "this class will handle web requests and return data (usually JSON)."

**Example:**
```java
@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World!";
    }
}
```

**When you visit:** `localhost:8080/hello`
**You get:** "Hello World!"

---

### 12. How do you create a simple REST API?

**Step-by-Step:**
1. Create a controller class
2. Add @RestController annotation
3. Create methods with @GetMapping, @PostMapping, etc.

**Example:**
```java
@RestController
public class UserController {
    
    @GetMapping("/users")
    public List<String> getUsers() {
        return Arrays.asList("John", "Jane", "Bob");
    }
    
    @PostMapping("/users")
    public String addUser(@RequestBody String user) {
        return "Added user: " + user;
    }
}
```

---

### 13. What is @Value annotation?

**Simple Answer:** It lets you read values from the properties file into your code.

**Example:**

*In application.properties:*
```properties
app.name=My Cool App
```

*In Java code:*
```java
@Component
public class MyService {
    @Value("${app.name}")
    private String appName;
    
    public void printName() {
        System.out.println("App name: " + appName);
    }
}
```

---

### 14. What are embedded servers and which ones are used?

**Simple Answer:** These are web servers that come built into your Spring Boot app.

**Common Ones:**
1. **Tomcat** - Default choice, most popular
2. **Jetty** - Lightweight, good for smaller apps
3. **Undertow** - Fast performance, good for high traffic

**How to change:**
```xml
<!-- Exclude default Tomcat -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- Add Jetty -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

---

### 15. How do you handle exceptions in Spring Boot?

**Simple Way - Global Exception Handler:**

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleAllExceptions(Exception ex) {
        return new ResponseEntity<>("Something went wrong: " + ex.getMessage(), 
                                  HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

**What this does:** Catches all errors in your app and shows a friendly message instead of scary error pages.

---

## Intermediate Level Questions

### 16. What is Spring Boot Actuator?

**Simple Answer:** Actuator is like a dashboard for your car, but for your Spring Boot app. It shows you health, performance, and other important information.

**What you can check:**
- `/health` - Is your app healthy?
- `/metrics` - Performance numbers
- `/info` - App information
- `/env` - Environment settings

**How to add:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

**Security Note:** These endpoints can show sensitive info, so secure them in production!

---

### 17. How does Spring Boot Auto-Configuration work?

**Simple Answer:** Auto-configuration is like a smart robot that looks at what you have and sets up everything you need automatically.

**How it works:**
1. Spring Boot scans your classpath (looks at your dependencies)
2. Based on what it finds, it makes educated guesses about what you need
3. It automatically creates and configures beans for you
4. Uses `@Conditional` annotations to decide what to configure

**Example:** If it sees a database dependency, it automatically sets up database connections.

---

### 18. What is spring-boot-starter-parent?

**Simple Answer:** It's like a parent who manages all the versions of tools (dependencies) so they work well together.

**What it does:**
- Sets default versions for all Spring dependencies
- Provides common configuration
- Ensures all parts work together without conflicts
- Sets up Maven plugins

**In pom.xml:**
```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.0</version>
    <relativePath/>
</parent>
```

---

### 19. Difference between @Component, @Service, @Repository, and @Controller

**Simple Explanation:**
- **@Component** - General purpose, "This is a Spring-managed class"
- **@Service** - Business logic, "This class handles business operations"  
- **@Repository** - Data access, "This class talks to the database"
- **@Controller** - Web requests, "This class handles web requests"

**Example:**
```java
@Component
public class OrderIdGenerator {
    // Generates unique order IDs
}

@Service
public class OrderService {
    // Calculates prices, applies discounts
}

@Repository
public class OrderRepository {
    // Saves/loads orders from database
}

@Controller
public class OrderController {
    // Handles web requests for orders
}
```

---

### 20. How does Spring Boot handle dependency management?

**Simple Answer:** Spring Boot acts like a smart shopping assistant that picks the right versions of everything you need.

**Key Features:**
1. **Starter Dependencies** - Bundles related dependencies
2. **Version Management** - Picks compatible versions
3. **Transitive Dependencies** - Automatically includes required sub-dependencies
4. **Bill of Materials (BOM)** - Ensures all Spring components work together

**Example:**
When you add `spring-boot-starter-web`, you automatically get:
- Spring MVC
- Jackson (for JSON)
- Embedded Tomcat
- And many others - all in compatible versions!

---

### 21. How do you implement caching in Spring Boot?

**Simple Steps:**
1. Add cache dependency
2. Enable caching with @EnableCaching
3. Use @Cacheable on methods you want to cache

**Code Example:**
```java
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@Service
public class UserService {
    
    @Cacheable("users")
    public User getUserById(Long id) {
        // This expensive database call will be cached
        return userRepository.findById(id);
    }
    
    @CacheEvict("users")
    public void deleteUser(Long id) {
        // This will remove the user from cache
        userRepository.delete(id);
    }
}
```

**Benefit:** Expensive operations (like database calls) are only done once, then the result is stored in memory for fast access.

---

### 22. What are Spring Boot Profiles?

**Simple Answer:** Profiles are like having different modes for your app - development mode, testing mode, production mode.

**Common Profiles:**
- **dev** - Development settings (detailed logs, test database)
- **test** - Testing settings (in-memory database, mock services)  
- **prod** - Production settings (minimal logs, real database)

**How to use:**

*application-dev.properties:*
```properties
spring.datasource.url=jdbc:h2:mem:devdb
logging.level.root=DEBUG
```

*application-prod.properties:*
```properties
spring.datasource.url=jdbc:mysql://prod-server/mydb
logging.level.root=ERROR
```

**Activate profile:**
```bash
java -jar myapp.jar --spring.profiles.active=prod
```

---

### 23. Best practices for versioning REST APIs

**Simple Approaches:**

1. **URL Versioning** (Most common):
   ```
   /api/v1/users
   /api/v2/users
   ```

2. **Header Versioning**:
   ```
   GET /api/users
   Headers: API-Version: v1
   ```

3. **Parameter Versioning**:
   ```
   /api/users?version=1
   ```

**Spring Boot Example:**
```java
@RestController
@RequestMapping("/api/v1")
public class UserControllerV1 {
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}

@RestController
@RequestMapping("/api/v2")
public class UserControllerV2 {
    @GetMapping("/users")
    public Page<UserDto> getUsers(@RequestParam int page) {
        return userService.getUsersPaginated(page);
    }
}
```

---

### 24. How to secure Spring Boot Actuator endpoints?

**Simple Security Setup:**

```java
@Configuration
@EnableWebSecurity
public class ActuatorSecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.requestMatcher(EndpointRequest.toAnyEndpoint())
            .authorizeHttpRequests(auth -> 
                auth.requestMatchers(EndpointRequest.to("health", "info")).permitAll()
                    .anyRequest().hasRole("ACTUATOR_ADMIN")
            )
            .httpBasic();
        return http.build();
    }
}
```

**Configuration:**
```properties
# Only expose specific endpoints
management.endpoints.web.exposure.include=health,info,metrics

# Require authentication for sensitive endpoints
management.endpoint.health.show-details=when-authorized
```

---

### 25. How to handle multiple beans of the same type?

**Problem:** When Spring finds multiple beans of the same type, it gets confused.

**Solutions:**

1. **@Primary** - Mark one as default:
```java
@Service
@Primary
public class PrimaryEmailService implements EmailService {
    // This will be used by default
}

@Service
public class BackupEmailService implements EmailService {
    // This is backup
}
```

2. **@Qualifier** - Specify which one to use:
```java
@RestController
public class EmailController {
    
    @Autowired
    @Qualifier("primaryEmailService")
    private EmailService emailService;
}
```

3. **@ConditionalOnProperty** - Use based on configuration:
```java
@Service
@ConditionalOnProperty(name = "email.provider", havingValue = "smtp")
public class SmtpEmailService implements EmailService {
}

@Service
@ConditionalOnProperty(name = "email.provider", havingValue = "sendgrid")
public class SendGridEmailService implements EmailService {
}
```

---

### 26. Transaction management best practices in Spring Boot

**Simple Rules:**
1. Use @Transactional on service methods (not controllers)
2. Keep transactions short
3. Handle exceptions properly

**Example:**
```java
@Service
@Transactional
public class OrderService {
    
    @Transactional
    public Order createOrder(OrderRequest request) {
        // All database operations in this method
        // will be part of one transaction
        
        Order order = new Order(request);
        orderRepository.save(order);
        
        inventoryService.updateStock(request.getItems());
        
        return order;
        // If any exception occurs, everything will rollback
    }
    
    @Transactional(readOnly = true)
    public Order getOrder(Long id) {
        // Read-only transaction for better performance
        return orderRepository.findById(id);
    }
}
```

**Key Points:**
- Use at service layer (where business logic lives)
- readOnly = true for queries (better performance)
- Exceptions automatically cause rollback

---

### 27. Testing approach in Spring Boot

**Testing Pyramid:**

1. **Unit Tests** - Test individual methods:
```java
@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    
    @Mock
    private OrderRepository orderRepository;
    
    @InjectMocks
    private OrderService orderService;
    
    @Test
    void shouldCreateOrder() {
        // Test individual service method
        OrderRequest request = new OrderRequest();
        Order expectedOrder = new Order();
        
        when(orderRepository.save(any(Order.class))).thenReturn(expectedOrder);
        
        Order result = orderService.createOrder(request);
        
        assertThat(result).isEqualTo(expectedOrder);
    }
}
```

2. **Integration Tests** - Test multiple components:
```java
@SpringBootTest
@AutoConfigureTestDatabase
class OrderIntegrationTest {
    
    @Autowired
    private OrderService orderService;
    
    @Test
    void shouldCreateOrderWithDatabase() {
        // Tests service + database integration
        OrderRequest request = new OrderRequest();
        
        Order result = orderService.createOrder(request);
        
        assertThat(result.getId()).isNotNull();
    }
}
```

3. **Web Layer Tests** - Test controllers:
```java
@WebMvcTest(OrderController.class)
class OrderControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private OrderService orderService;
    
    @Test
    void shouldReturnOrder() throws Exception {
        Order order = new Order();
        when(orderService.getOrder(1L)).thenReturn(order);
        
        mockMvc.perform(get("/api/orders/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
    }
}
```

---

### 28. What is application.yml and how is it different from .properties?

**application.properties:**
```properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost/mydb
spring.datasource.username=root
spring.datasource.password=secret
logging.level.com.myapp=DEBUG
```

**application.yml (Same configuration):**
```yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost/mydb
    username: root
    password: secret

logging:
  level:
    com.myapp: DEBUG
```

**Differences:**
- **YAML** is more readable for complex configurations
- **YAML** supports hierarchical structure naturally
- **YAML** allows comments
- **Properties** is simpler and more familiar
- **YAML** is sensitive to indentation (can cause errors)

---

### 29. How does data access layer work in Spring Boot?

**Simple Answer:** Spring Boot makes database work much easier by providing ready-made repository interfaces.

**JPA Repository Example:**
```java
// Entity (represents database table)
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    
    // getters and setters
}

// Repository (handles database operations)
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring Boot automatically creates these methods:
    // save(), findAll(), findById(), delete(), etc.
    
    // Custom query methods
    List<User> findByName(String name);
    User findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.name LIKE %?1%")
    List<User> findUsersWithNameContaining(String name);
}

// Service (uses repository)
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public User createUser(String name, String email) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        return userRepository.save(user);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
```

**Configuration (in application.properties):**
```properties
# Database connection
sp