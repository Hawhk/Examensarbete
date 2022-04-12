from locust import HttpUser, task, constant

class User(HttpUser):
    wait_time = constant(2)
    
    @task
    def dynamicSmall(self):
        with self.client.get("/dynamic/small", catch_response=True) as response:
            if response.elapsed.total_seconds() >= 10:
                response.failure("Request took 10 seconds or more")
            elif response.elapsed.total_seconds() >= 5:
                response.failure("Request took 5-10 seconds")
            elif response.elapsed.total_seconds() >= 1:
                response.failure("Request took 1-5 seconds")
        
    @task
    def dynamicLarge(self):
        with self.client.get("/dynamic/large", catch_response=True) as response:
            if response.elapsed.total_seconds() >= 10:
                response.failure("Request took 10 seconds or more")
            elif response.elapsed.total_seconds() >= 5:
                response.failure("Request took 5-10 seconds")
            elif response.elapsed.total_seconds() >= 1:
                response.failure("Request took 1-5 seconds")
        
    @task
    def staticSmall(self):
        with self.client.get("/static/small", catch_response=True) as response:
            if response.elapsed.total_seconds() >= 10:
                response.failure("Request took 10 seconds or more")
            elif response.elapsed.total_seconds() >= 5:
                response.failure("Request took 5-10 seconds")
            elif response.elapsed.total_seconds() >= 1:
                response.failure("Request took 1-5 seconds")
        
    @task
    def staticLarge(self):
        with self.client.get("/static/large", catch_response=True) as response:
            if response.elapsed.total_seconds() >= 10:
                response.failure("Request took 10 seconds or more")
            elif response.elapsed.total_seconds() >= 5:
                response.failure("Request took 5-10 seconds")
            elif response.elapsed.total_seconds() >= 1:
                response.failure("Request took 1-5 seconds")