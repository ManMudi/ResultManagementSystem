import axios from "axios";

 
class UserService{
    static BASE_URL = "http://localhost:8080"

    static async login(email, password){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async register(userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllUsers(token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin/get-all-users`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getYourProfile(token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin-user/get-profile`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getUserById(userId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/admin-user/get-users/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteUser(userId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateUser(userId, userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.put(`${UserService.BASE_URL}/admin-user/update/${userId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
   /**  For Students*/
    static async getAllStudents(token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/students`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async addStudent(userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.post(`${UserService.BASE_URL}/students`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getStudentById(studentId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/students/${studentId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async updateStudent(studentId, userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.put(`${UserService.BASE_URL}/students/${studentId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteStudent(studentId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/students/${studentId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    /**Class */
    static async getAllClass(token){
    // eslint-disable-next-line no-useless-catch
       try{
        const response = await axios.get(`${UserService.BASE_URL}/levels`, 
        {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data;
      }catch(err){
        throw err;
     }
    }     


    static async addLevel(userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.post(`${UserService.BASE_URL}/levels`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getLevelById(levelId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.get(`${UserService.BASE_URL}/levels/${levelId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async updateLevel(levelId, userData, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.put(`${UserService.BASE_URL}/levels/${levelId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async deleteLevel(levelId, token){
        // eslint-disable-next-line no-useless-catch
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/levels/${levelId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    /**School*/
    static async getAllSchool(token){
        // eslint-disable-next-line no-useless-catch
           try{
            const response = await axios.get(`${UserService.BASE_URL}/schools`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
          }catch(err){
            throw err;
         }
        }

        static async addSchool(userData, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.post(`${UserService.BASE_URL}/schools`, userData, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async getSchoolById(schoolId, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.get(`${UserService.BASE_URL}/schools/${schoolId}`, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async updateSchool(schoolId, userData, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.put(`${UserService.BASE_URL}/schools/${schoolId}`, userData,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async deleteSchool(schoolId, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.delete(`${UserService.BASE_URL}/schools/${schoolId}`, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }

      /**Subject Ordinary*/
    static async getAllSubjectOrdinary(token){
        // eslint-disable-next-line no-useless-catch
           try{
            const response = await axios.get(`${UserService.BASE_URL}/subject-ordinary`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
          }catch(err){
            throw err;
         }
        }

        static async addSubjectOrdinary(userData, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.post(`${UserService.BASE_URL}/subject-ordinary`, userData, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async getSubjectOrdinaryById(subjectId, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.get(`${UserService.BASE_URL}/subject-ordinary/${subjectId}`, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async updateSubjectOrdinary(subjectId, userData, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.put(`${UserService.BASE_URL}/subject-ordinary/${subjectId}`, userData,
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }
    
        static async deleteSubjectOrdinary(subjectId, token){
            // eslint-disable-next-line no-useless-catch
            try{
                const response = await axios.delete(`${UserService.BASE_URL}/subject-ordinary/${subjectId}`, 
                {
                    headers: {Authorization: `Bearer ${token}`}
                })
                return response.data;
            }catch(err){
                throw err;
            }
        }


    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UserService;