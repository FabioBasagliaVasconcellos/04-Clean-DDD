import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { CommentOnQuestionUseCase } from './comment-on-question'
import { InMemoryQuestionCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository
let sut: CommentOnQuestionUseCase

describe('Comment on Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
        inMemoryQuestionCommentsRepository = new InMemoryQuestionCommentsRepository()

        sut  = new CommentOnQuestionUseCase(
            inMemoryQuestionsRepository,
            inMemoryQuestionCommentsRepository,
            )
    })

    it('should be able to comment on question', async () => {     
        const question = makeQuestion()

        await inMemoryQuestionsRepository.create(question)
        
        await sut.execute({
            questionId: question.id.toString(),
            authorId: question.authorId.toString(),
            content: 'Comentario teste',
        })
      
        expect(inMemoryQuestionCommentsRepository.items[0].content).toEqual('Comentario teste')
      })
})


